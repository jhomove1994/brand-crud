import { Request, Response } from 'express';
import { BrandService } from '../services/brand.service';
import { Brand } from '../entities/brand.entity';
import {
    CreateBrandMapper,
    GetBrandMapper,
    UpdateBrandMapper,
} from '../mappers/brand.mapper';
import { validateOrReject } from 'class-validator';
import { SUCCESS } from '../utilities/messages.utilities';
import { ApiResponse } from '../models/general.model';
import { handleError } from '../utilities/error.utilities';

export class BrandController {
    constructor(private brandService: BrandService) {}

    Get = async (
        { headers }: Request,
        res: Response,
    ): Promise<Response<ApiResponse<Brand[]>>> => {
        try {
            const filters = GetBrandMapper(headers);
            const brands = await this.brandService.GetPaginate(filters);
            return res.status(200).json({
                message: SUCCESS.SUCCESS,
                data: brands,
            });
        } catch (error: any) {
            return handleError(error, res);
        }
    };

    Create = async (
        { body }: Request,
        res: Response,
    ): Promise<Response<ApiResponse<Brand>>> => {
        const brand = CreateBrandMapper(body);
        try {
            await validateOrReject(brand);
            const newBrand = await this.brandService.Create(brand);
            return res.status(201).json({
                message: SUCCESS.RESOURCE_CREATED.replace('$s', 'Brand'),
                data: newBrand,
            });
        } catch (error: any) {
            return handleError(error, res);
        }
    };

    Update = async ({ body, params }: Request, res: Response) => {
        if (!params.id || isNaN(Number(params.id))) {
            throw new Error('Invalid ID');
        }
        const brand = UpdateBrandMapper(body);
        try {
            const updatedBrand = await this.brandService.Update({
                ...brand,
                id: Number(params.id),
            } as Brand & { id: number });
            return res.status(200).json({
                message: SUCCESS.RESOURCE_UPDATED.replace('$s', 'Brand'),
                data: updatedBrand,
            });
        } catch (error: any) {
            return handleError(error, res);
        }
    };
}
