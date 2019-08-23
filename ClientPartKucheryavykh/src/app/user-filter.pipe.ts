import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(userList, searchStr: string) {
    if (userList.length === 0 || searchStr === '') 
    {
      return userList;
    }

    return  userList.filter(user => user.id.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
