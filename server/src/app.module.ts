import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TrackModule } from './track/track.module'
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://serega-s:whoami111@cluster0.3lpp3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    TrackModule,
  ], // to expand app module
})
export class AppModule {}
