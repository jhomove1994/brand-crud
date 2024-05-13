import { Router } from 'express';
import { postgresConfig } from '../config/database/postgres';
import { BrandRepository } from '../repositories/brand.repository';
import { BrandService } from '../services/brand.service';
import { BrandController } from '../controllers/brand.controller';

const brandRouter = Router();
const BASE_PATH = '/brand';
const repostitory = new BrandRepository(postgresConfig);
const service = new BrandService(repostitory);
const controller = new BrandController(service);

brandRouter.post(`${BASE_PATH}`, controller.Create);
brandRouter.get(`${BASE_PATH}`, controller.Get);
//
export { brandRouter };
