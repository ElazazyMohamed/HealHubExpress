export class FamilyMemberRelationError extends Error {
    constructor(errorName) {
      super('Invalid family member' + errorName);
      this.name = 'InvalidFamilyMemberRelationError';
    }
  }
