import {styled} from 'styled-components/native';
import {windowWidth} from 'constanst/dimentions';
import colors from 'constanst/colors';
import {getFontSize} from 'utils/fonts';

const padding = '10px';

const Segment = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: ${windowWidth > 450 ? 'row' : 'column'};
  background-color: #fff;
  padding: 10px 5px 0 5px;
`;

const RowView = styled.View<{customPadding?: string}>`
  flex-direction: row;
  padding: ${({customPadding}) => customPadding ?? '0px'};
`;

const ColumnView = styled.View`
  flex-direction: column;
`;

const UserDataTitle = styled.Text`
  color: ${colors.grey};
  font-weight: 500;
  font-size: ${getFontSize(12)}px;
`;

const DataText = styled.Text`
  color: ${colors.grey};
  font-weight: 800;
  font-size: ${getFontSize(15)}px;
`;

const Icon = styled.Image`
  height: 20px;
  width: 20px;
  object-fit: contain;
  margin: 0;
  padding: 0;
`;

export {Segment, RowView, ColumnView, UserDataTitle, DataText, Icon, padding};
