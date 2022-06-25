import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from 'src/@core/application/list-all-routes.use-case copy';

@Controller('routes')
export class RoutesController {
  constructor(
    private createUseCase: CreateRouteUseCase,
    private listAllUseCase: ListAllRoutesUseCase,
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.createUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listAllUseCase.execute();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.routesService.findOne(+id);
  //   }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
  //     return this.routesService.update(+id, updateRouteDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.routesService.remove(+id);
  //   }
  // }
}
