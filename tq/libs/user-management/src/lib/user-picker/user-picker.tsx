import './user-picker.module.css';

/* eslint-disable-next-line */
export interface UserPickerProps {}

export function UserPicker(props: UserPickerProps) {
  return (
    <select>
      <option>Users</option>
    </select>
  );
}

export default UserPicker;
