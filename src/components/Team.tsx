import React from 'react';
import styled from 'styled-components';
import ChloeImg from '../assets/chloe.png';
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
  font-size: 3.5rem;
  color: #5e3a87;
  margin-bottom: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
  margin-bottom: 2rem;
`;

const MemberCard = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 275px;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberPhoto = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: -0.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.65rem;
  color: #5e3a87;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const MemberLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Team: React.FC = () => {
  const teamMembers = [
    { name: 'Chloe', role: 'Statistics & Data Science', image: ChloeImg, linkedin: 'https://www.linkedin.com/in/chloe-zandberg/'},
    { name: 'Colleen', role: 'Computer Science & Psychology', image: ColleenImg, linkedin: 'https://www.linkedin.com/in/colleencipriano'},
    { name: 'Erika', role: 'Computer Science', image: ErikaImg, linkedin: 'https://www.linkedin.com/in/erikatian/'},
    { name: 'Frances', role: 'Computer Science', image: FrancesImg, linkedin: 'https://www.linkedin.com/in/frances-i-384014229/'},  
    { name: 'Nataniella', role: 'Computer Science & Psychology', image: NataniellaImg, linkedin: 'https://www.linkedin.com/in/nataniella-ogogo'},
    { name: 'Sharon', role: 'Computer Science', image: SharonImg, linkedin: 'https://www.linkedin.com/in/sharon-musa-8832a11a6/'},
  ];

  return (
    <TeamContainer>
      <Title>Meet the Team!</Title>
      <TeamGrid>
        {teamMembers.slice(0, 3).map((member) => (
          <MemberCard key={member.name}>
            <MemberLink href={member.linkedin || '#'} target="_blank">
              <MemberPhoto src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberLink>
          </MemberCard>
        ))}
      </TeamGrid>
      <TeamGrid>
        {teamMembers.slice(3, 6).map((member) => (
          <MemberCard key={member.name}>
            <MemberLink href={member.linkedin || '#'} target="_blank">
              <MemberPhoto src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberLink>
          </MemberCard>
        ))}
      </TeamGrid>
      <TeamGrid>
        {teamMembers.slice(6).map((member) => (
          <MemberCard key={member.name}>
            <MemberLink href={member.linkedin || '#'} target="_blank">
              <MemberPhoto src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberLink>
          </MemberCard>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;
