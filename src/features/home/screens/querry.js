import React from 'react';
import { Section } from 'react-native-paper/lib/typescript/components/List/List';
import useQueryParam from './useQueryParam';

const query = () => {
  const [course_section, setSection] = useQueryParam('section', '');

  return (
    <input
      value={section}
      onChange={({ target: { course } }) => setSearch(course)}
    />
  );
};