import styled from '@emotion/styled';

export const CardProfile = styled.div`
    padding: 20px;
    border: solid 3px black;
    margin-bottom: 10px;
`
export const CardDescription = styled.div`
    text-align: center;
`

export const CardImg = styled.img`
    width: 100px
`

export const StatsList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
`
export const StatsItem = styled.li`
    &:not(:last-child) {
       margin-right: 10px; 
    }
    
`

export const Quantity = styled.span`
    display: flex;
    justify-content: center;
`







