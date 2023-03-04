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
import { EventService } from './event.service';
import { Event } from './event.entity';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({ status: 200, description: 'Return all events.' })
  async findAll(@Response() res) {
    const result = await this.eventService.findAll();
    return res.json(result);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get event by id' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return event by id.' })
  async findOne(@Param('id') id: number, @Response() res) {
    const result = await this.eventService.findOne(id);
    return res.json(result);
  }

  @Post()
  @ApiOperation({ summary: 'Create event' })
  @ApiBody({ type: Event })
  @ApiResponse({ status: 201, description: 'Create event.' })
  async create(@Body() event: Event, @Response() res) {
    const result = await this.eventService.create(event);
    return res.json(result);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update event' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: Event })
  @ApiResponse({ status: 200, description: 'Update event.' })
  async update(@Param('id') id: number, @Body() event: Event, @Response() res) {
    const result = await this.eventService.update(id, event);
    return res.json(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete event' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 204, description: 'Delete event.' })
  async remove(@Param('id') id: number, @Response() res) {
    await this.eventService.remove(id);
    return res.json([]);
  }
}
