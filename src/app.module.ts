import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule, UserModule, UsersModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
