import React from 'react';
import styled from 'styled-components';
import ChloeImg from '../assets/Logo.png';
import ColleenImg from '../assets/colleen.png';
import ErikaImg from '../assets/erika.png';
import FrancesImg from '../assets/frances.png';
import NataniellaImg from '../assets/nataniella.png';
import SharonImg from '../assets/sharon.png';

const TeamContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f0f8ff;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #5e3a87;
  margin-bottom: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  margin-bottom: 2rem;
`;

const MemberCard = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const MemberName = styled.h3`
  font-size: 2rem;
  color: #5e3a87;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const About: React.FC = () => {
  const teamMembers = [
    { name: 'Chloe', role: 'Statistics & Data Science', image: ChloeImg },
    { name: 'Colleen', role: 'Computer Science & Psychology', image: ColleenImg },
    { name: 'Erika', role: 'Computer Science', image: ErikaImg },
    { name: 'Frances', role: 'Computer Science', image: FrancesImg },
    { name: 'Nataniella', role: 'Computer Science & Psychology', image: NataniellaImg },
    { name: 'Sharon', role: 'Computer Science', image: SharonImg },
  ];

  return (
    <TeamContainer>
      <Title>Meet the Team!</Title>
      <TeamGrid>
        {teamMembers.slice(0, 3).map((member) => (
          <MemberCard key={member.name}>
            <MemberPhoto src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </MemberCard>
        ))}
      </TeamGrid>
      <TeamGrid>
        {teamMembers.slice(3, 6).map((member) => (
          <MemberCard key={member.name}>
            <MemberPhoto src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </MemberCard>
        ))}
      </TeamGrid>
      <TeamGrid>
        {teamMembers.slice(6).map((member) => (
          <MemberCard key={member.name}>
            <MemberPhoto src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </MemberCard>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default About;
