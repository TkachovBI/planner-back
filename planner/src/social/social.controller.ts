import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Response,
} from '@nestjs/common';
import { SocialService } from './social.service';
import { Social } from './social.entity';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('social')
@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Get()
  @ApiOperation({ summary: 'Get all socials' })
  @ApiResponse({ status: 200, description: 'Return all socials.' })
  async findAll(@Response() res) {
    const result = await this.socialService.findAll();
    return res.json(result);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number' })
  @ApiOperation({ summary: 'Get social by id' })
  @ApiResponse({ status: 200, description: 'Return social by id.' })
  async findOne(@Param('id') id: number, @Response() res) {
    const result = await this.socialService.findOne(id);
    return res.json(result);
  }

  @Get('event/:eventId')
  @ApiParam({ name: 'eventId', type: 'number' })
  @ApiOperation({ summary: 'Get social by event id' })
  @ApiResponse({ status: 200, description: 'Return socials by event id.' })
  async findByEventId(@Param('eventId') eventId: number, @Response() res) {
    const result = await this.socialService.findByEventId(eventId);
    return res.json(result);
  }

  @Post()
  @ApiBody({ type: Social })
  @ApiResponse({ status: 201, description: 'Create social.' })
  @ApiOperation({ summary: 'Create social' })
  async create(@Body() social: Social, @Response() res) {
    const result = await this.socialService.create(social);
    return res.json(result);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update social' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: Social })
  @ApiResponse({ status: 200, description: 'Update social.' })
  async update(
    @Param('id') id: number,
    @Body() social: Social,
    @Response() res,
  ) {
    const result = await this.socialService.update(id, social);
    return res.json(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete social By Id' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Delete social.' })
  async remove(@Param('id') id: number, @Response() res) {
    await this.socialService.remove(id);
    return res.json([]);
  }
}
