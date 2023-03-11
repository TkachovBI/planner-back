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
import { UserService } from './user.service';
import { User } from './user.entity';
import {
  ApiTags,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async findAll(@Response() res) {
    const result = await this.userService.findAll();
    return res.json(result);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get userById' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return user by id.' })
  async findOne(@Param('id') id: number, @Response() res) {
    const result = await this.userService.findOne(id);
    return res.json(result);
  }

  @Put('/login')
  @ApiBody({ type: User })
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'Create user.' })
  async login(@Body() user: User, @Response() res) {
    const result = await this.userService.login(user);
    return res.json(result);
  }

  @Post()
  @ApiBody({ type: User })
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'Create user.' })
  async create(@Body() user: User, @Response() res) {
    const result = await this.userService.create(user);
    console.log(result);
    return res.json(result);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: 'number' })
  @ApiOperation({ summary: 'Update user' })
  @ApiBody({ type: User })
  @ApiResponse({ status: 200, description: 'Update user.' })
  async update(@Param('id') id: number, @Body() user: User, @Response() res) {
    const result = await this.userService.update(id, user);

    return res.json(result);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number' })
  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({ status: 200, description: 'Delete user.' })
  async remove(@Param('id') id: number, @Response() res) {
    await this.userService.remove(id);
    return res.json([]);
  }
}
