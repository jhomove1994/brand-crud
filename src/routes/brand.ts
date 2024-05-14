import { Router } from 'express';
import { postgresConfig } from '../config/database/postgres';
import { BrandRepository } from '../repositories/brand.repository';
import { BrandService } from '../services/brand.service';
import { BrandController } from '../controllers/brand.controller';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repositories/user.repository';

const brandRouter = Router();
const BASE_PATH = '/brand';
const repostitory = new BrandRepository(postgresConfig);
const userRepostitory = new UserRepository(postgresConfig);
const userService = new UserService(userRepostitory);
const service = new BrandService(repostitory, userService);
const controller = new BrandController(service);

brandRouter.post(`${BASE_PATH}`, controller.Create);
brandRouter.get(`${BASE_PATH}`, controller.Get);
brandRouter.put(`${BASE_PATH}/:id`, controller.Update);
//
export { brandRouter };
