import tw from "twin.macro";
import styled from "styled-components";

import {BsPersonCircle} from "react-icons/bs"
import {RxDividerVertical} from "react-icons/rx";

interface CuratorProps{
    nickname?: string,
    subscribers?: number,
    curations?: number,
    introduce?: string,
}
const SubCuratorCard = ({nickname, subscribers, curations, introduce}: CuratorProps) => {


    return(
        <CuratorContainer>
            <CuratorLeft>
               
                    <BsPersonCircle size="3rem"/>
            </CuratorLeft>
                
            <CuratorRight>
               <CuratorInfo>
                   
                    <UserNickname>
                        {nickname}
                    </UserNickname>
                    <UserInfo>
                       구독자 {subscribers} 명
                    </UserInfo>
                    <RxDividerVertical size="1.2rem"/>
                    <UserInfo>
                        작성한 큐레이션 {curations}개
                    </UserInfo>
                    
                </CuratorInfo>
               <CuratorIntro id="introduce">
                    {introduce}
                </CuratorIntro>
                
            </CuratorRight>
        </CuratorContainer>
    )
}

const CuratorContainer = styled.div`
    width: calc(50% - 1rem);

    display: flex;
    align-items: center;
    padding: 1.3rem 2rem ;
    margin: 1rem 0;
    
    font-size: 1.2vw;
    border-radius: 0.625rem;
    background-color: #D9E1E8;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    
    cursor: pointer;

    &:hover{
        background-color: ${({theme}) => theme.colors.mainPastelBlue300};
        color: white;

        div#introduce{
            color: white;
        }
    }   
    svg{
        display:flex;
        align-items: center;
    }

`;
const CuratorLeft = tw.div`
    mr-8
`;
const CuratorRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    >div:last-child{
        margin-right: auto;
    }
`;
const CuratorInfo = tw.div`
    flex
    items-center
    gap-2
`;
const UserNickname = styled.div`
   font-size: 1.2vw;
   font-weight: 500;
`;
const UserInfo = styled.div`
    font-size: 0.8vw;
`;
const CuratorIntro = styled.div`
    font-size: 0.8vw;
    color: #595656;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export default SubCuratorCard;