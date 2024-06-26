import { GroupRepository } from "@repository/GroupRepository";
import { GroupEntity } from '@entity/GroupEntity';
import { DeleteResult } from "typeorm";

export class GroupService {

    // Get group by id
    static async getGroup(id: number): Promise<GroupEntity | null> {
        return await GroupRepository.findOne({ where: { id } });
    }

    // Get all groups
    static async getAllGroups(): Promise<GroupEntity[]> {
        return await GroupRepository.find();
    }

    // Create
    static async createGroup(Group: Partial<GroupEntity>): Promise<GroupEntity> {
        const newGroup = GroupRepository.create(Group);
        return await GroupRepository.save(newGroup);
    }

    // Update
    static async updateGroup(id: number, Group: Partial<GroupEntity>): Promise<Object | null> {
        return await GroupRepository.update(id, Group);
    }

    // Delete
    static async deleteGroup(id: number): Promise<DeleteResult> {
        return await GroupRepository.delete({ id });
    }

}
