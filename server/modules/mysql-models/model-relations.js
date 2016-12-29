import UserModel from './users-model';
import GroupModel from './groups-model';
import UserGroupModel from './users-groups-model';

// UserModel的实例拥有getGroups、setGroups、addGroup、addGroups、createGroup、removeGroup、hasGroup方法
UserModel.belongsToMany(GroupModel, {'through': {model: UserGroupModel}});
// GroupModel的实例拥有getUsers、setUsers、addUser、addUsers、createUser、removeUser、hasUser方法
GroupModel.belongsToMany(UserModel, {'through': {model: UserGroupModel}});