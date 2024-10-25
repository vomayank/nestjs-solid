import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    // Generate a dummy JSON payload
    const dummyPayload = {
      message: 'Hello World!',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      data: {
        users: [
          { id: 1, name: 'Alice', role: 'admin' },
          { id: 2, name: 'Bob', role: 'user' },
          { id: 3, name: 'Charlie', role: 'user' }
        ],
        stats: {
          activeUsers: 42,
          totalPosts: 1337,
          uptime: '99.99%'
        }
      }
    };

    // Return the dummy payload
    return dummyPayload;
  }
}
