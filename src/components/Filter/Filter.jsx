import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <LabelStyled>
      Find contacts by name
      <InputStyled
        type="text"
        onChange={onChange}
      />
    </LabelStyled>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
