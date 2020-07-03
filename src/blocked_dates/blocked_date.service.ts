import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockedDate } from './entities/blocked_date.entity';
// import { RegisterTaskDto } from '../auth/dto/register-task.dto';

import SearchDto from '../shared/dto/search.dto';

@Injectable()
export class BlockedDateService {
    constructor(
        @InjectRepository(BlockedDate)
        private readonly repository: Repository<BlockedDate>,
    ) { }

    async findAll(req: SearchDto): Promise<BlockedDate[]> {
        return await this.repository.find(
            {
            // skip: req.skip,
            // take: req.limit,
        });
    }

    async create(data: BlockedDate): Promise<BlockedDate> {
        return await this.repository.save(data);
    }

    // async register(dto: RegisterTaskDto): Promise<Task> {
    //     const task = new Task();
    //     task.id = dto.id;
    //     task.ministry = dto.ministry;
    //     task.taskName = dto.taskName;
    //     task.taskDescription = dto.taskDescription
    //     return await this.repository.save(task);
    // }

    // findOne(id: number): Promise<Task> {
    //     return this.repository.findOne(id);
    // }

    // async update(id: Task): Promise<Task> {
    //     return await this.repository.save(id);
    // }
    
    // async remove(id: number): Promise<void> {
    //     await this.repository.delete(id);
    // }

    // async findByName(ministry: string): Promise<Task | undefined> {
    //     return this.repository.findOne(ministry);
    // }

    // async exits(Ministry: string): Promise<boolean> {
    //     const count = await this.repository.count({ where: { Ministry } });
    //     return count > 0;
    // }
}


