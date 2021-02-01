import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Issue() {
  const [issue, setIssue] = useState({
    title: '',
    description: ''
  });
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth
      .get(`issues/${id}`)
      .then((res) => {
        console.log('RETURNED ISSUE OBJECT', res);
        setIssue(res.data);
        console.log('ISSUE STATE', issue);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <IssueCard>
      <h3>DummyTitle{issue.title}</h3>
      {/* <h3>{issue.title}</h3> */}
      <p>
        Solve challenges tAction Against Hunger citizenry Martin Luther King Jr.
        Combat malaria, mobilize lasting change billionaire philanthropy
        revitalize globalization research. Honor urban fundraise human being;
        technology raise awareness partnership. Political global growth
        cross-agency coordination democratizing the. Best practices disruptor
        catalyst public sector; protect micro-finance educate. Gender rights
        world problem solving legitimize rural development medicine Ford
        Foundation committed revitalize respect. Affordable health care,
        humanitarian.
      </p>
      {/* <p>{issue.description}</p> */}
    </IssueCard>
  );
}

export default Issue;

const IssueCard = styled.div`
  display: flex;
  justify-content: center;
`;
