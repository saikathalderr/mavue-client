import { SvgIconComponent } from '@mui/icons-material';

export interface IMenu {
  title: string;
  icon: SvgIconComponent;
  path: string;
  iconColor:
    | 'action'
    | 'disabled'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
  items: IChildMenu[];
}

export interface IChildMenu extends Omit<IMenu, 'items'> {}
