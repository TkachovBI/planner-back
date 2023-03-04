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
import { LinkService } from './link.service';
import { Link } from './link.entity';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('link')
@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get()
  @ApiOperation({ summary: 'Get links' })
  @ApiResponse({ status: 200, description: 'Return all links.' })
  async findAll(@Response() res) {
    const result = await this.linkService.findAll();
    return res.json(result);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get link by id' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return link by id.' })
  async findOne(@Param('id') id: number, @Response() res) {
    const result = await this.linkService.findOne(id);
    return res.json(result);
  }

  @Get('event/:id')
  @ApiOperation({ summary: 'Get link by eventId' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return link by eventId.' })
  async findOneByEventId(@Param('id') id: number, @Response() res) {
    const result = await this.linkService.findByEventId(id);
    return res.json(result);
  }

  @Post()
  @ApiOperation({ summary: 'Create link' })
  @ApiBody({ type: Link })
  @ApiResponse({ status: 201, description: 'Create link.' })
  async create(@Body() link: Link, @Response() res) {
    const result = await this.linkService.create(link);
    return res.json(result);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Link' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: Link })
  @ApiResponse({ status: 200, description: 'Update link.' })
  async update(@Param('id') id: number, @Body() link: Link, @Response() res) {
    const result = await this.linkService.update(id, link);
    return res.json(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Link' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Delete link.' })
  async remove(@Param('id') id: number, @Response() res) {
    await this.linkService.remove(id);
    return res.json([]);
  }
}
