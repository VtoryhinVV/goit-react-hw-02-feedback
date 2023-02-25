import React from 'react';
import PropTypes from 'prop-types';
import { SectionName } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <SectionName>{title}</SectionName>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
