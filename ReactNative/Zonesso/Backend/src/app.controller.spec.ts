import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('showroom-details')
  getShowroomDetails(): string {
    return this.appService.getShowroomDetails();
  }

  @Get('confirmation-page')
  getConfirmationPage(): string {
    return this.appService.getConfirmationPage();
  }

  @Get('home-page')
  getHomePage(): string {
    return this.appService.getHomePage();
  }

  @Get('carwash-and-servicing-details')
  getCarwashAndServicingDetails(): string {
    return this.appService.getCarwashAndServicingDetails();
  }
}

// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getShowroomDetails(): string {
    return 'Showroom details for Dubai and Sharjah.';
  }

  getConfirmationPage(): string {
    return 'Confirmation page content.';
  }

  getHomePage(): string {
    return 'Home page content.';
  }

  getCarwashAndServicingDetails(): string {
    return 'Car wash and servicing details.';
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// test/app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getShowroomDetails', () => {
    it('should return showroom details', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getShowroomDetails()).toBe('Showroom details for Dubai and Sharjah.');
    });
  });

  describe('getConfirmationPage', () => {
    it('should return confirmation page content', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getConfirmationPage()).toBe('Confirmation page content.');
    });
  });

  describe('getHomePage', () => {
    it('should return home page content', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHomePage()).toBe('Home page content.');
    });
  });

  describe('getCarwashAndServicingDetails', () => {
    it('should return car wash and servicing details', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getCarwashAndServicingDetails()).toBe('Car wash and servicing details.');
    });
  });
});
