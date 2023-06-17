import {styled} from 'styled-components/native';
import {windowWidth} from 'constanst/dimentions';
import colors from 'constanst/colors';
import {getFontSize} from 'utils/fonts';

const Segment = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: ${windowWidth > 400 ? 'row' : 'column'};
  background-color: #fff;
  padding: 10px 5px 0 5px;
`;

const RowView = styled.View<{margin: boolean}>`
  flex-direction: row;
  padding: ${({margin}) => (margin ? '10px' : '0')};
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

export {Segment, RowView, ColumnView, UserDataTitle, DataText, Icon};
