import styled from "styled-components";

export const Container = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }

  > select {
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
    padding: 1.2rem 1.4rem;

    appearance: none;
    -webkit-appearance: none;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1.6rem top 50%;
  }
`;
