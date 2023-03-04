import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkModule } from './links/link.module';
import { EventModule } from './event/event.module';
import { SocialModule } from './social/social.module';
import { User } from './user/user.entity';
import { Social } from './social/social.entity';
import { Link } from './links/link.entity';
import { Event } from './event/event.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'QAZWEr123',
      database: 'planner_db_loc',
      entities: [User, Event, Social, Link],
      synchronize: true,
    }),
    UserModule,
    LinkModule,
    EventModule,
    SocialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
