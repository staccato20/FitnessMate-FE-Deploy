import { styled } from "styled-components";
import theme from "./../../styles/theme";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  .searchTopWrapper {
    max-width: 812px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .searchTitleWrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 20px 0;
      border-bottom: 1px solid ${theme.Gray20};
      .searchTitleTextWrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .searchTitle1 {
          text-align: center;
          color: ${theme.Gray50};
          font-size: 24px;
          font-weight: 700;
        }
        .searchTitle2 {
          text-align: center;
          color: ${theme.Black};
          font-size: 38px;
          font-weight: 700;
        }
      }
    }
  }

  .searchBarWrapper {
    display: flex;
    gap: 8px;
    height: 131px;
    position: relative;
		max-width: 812px;
		width: 90%;
		margin: 0 auto;
    .searchBarFilter {
      display: flex;
      width: 140px;
      height: 56px;
      padding: 10px 12px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      border: 1px solid ${theme.Gray70};

      .searchBarFilterText {
        color: #333d4b;
        text-align: center;
        font-size: 18px;
        line-height: 150%; /* 27px */
        letter-spacing: -0.36px;
      }
    }

    .searchFilterModalWrapper {
      position: absolute;
      top: 65px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 119px;
      padding: 3px 0;
      border-radius: 10px;
      background: ${theme.Gray10};
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
      .searchFilterModalContent {
        color: ${theme.Gray70};
        font-size: 16px;
        line-height: 150%; /* 24px */
        letter-spacing: -0.32px;
        padding: 3px 13px;
        text-align: left;
        width: 100%;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .searchContentWrapper {
    text-align: left;
    @media screen and (max-width: 825px) {
      text-align: center;
    }
  }

  .serachButtonWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 58px;
    .BtnWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      .backBtnText {
        color: ${theme.BrandNon};
        font-size: 24px;
      }
      .nextBtnText {
        color: ${theme.Brand};
        font-size: 24px;
      }
    }
  }
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .toggleSwitch_wrap {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .toggleSwitch {
    position: relative;
    display: inline-block;
    width: 201px;
    height: 50px;
  }
`;

export const SectionContainer = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
	width: 100%;

	#searchBarWrapper {
		display: flex;
		flex-direction: column;
    gap: 8px;
		max-width: 812px;
		width: 90%;
		height: 131px;
		margin: 0 auto;
	}
`

export const Filter = styled.div`

	position: relative;
	max-width: 812px;
	display: flex;

	#searchBarFilter {
			gap: 12px;
      display: flex;
      height: 48px;
			max-width: 812px;
      padding: 10px 12px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
			background: ${theme.Gray10};

      #searchBarFilterText {
        color: ${theme.Gray80};
        text-align: center;
        font-size: 18px;
				font-weight: 500;
      }

			img {
				cursor: pointer;
				z-index: 800;
			}

			.rotate-right {
				transform: rotate(45deg);
				transition: transform 0.3s ease;
			}

			.rotate-left {
				transform: rotate(-90deg);
				transition: transform 0.3s ease;
			}

			.addFilter {
				display: flex;
				gap: 4px;

				button {
					display: flex;
					gap: 4px;
					align-items: center;
					padding: 4px 8px;
					border-radius: 4px;
					background: ${theme.Gray20};
					color: ${theme.Gray80};
					font-size: 18px;
					font-weight: 500;
				}
			}
	}

	#searchFilterModalWrapper {
		position: absolute;
		top: 58px;
		display: flex;
		flex-wrap: wrap;
		width: 247px;
    height: 108px;
		padding: 19px 18px;
		gap: 12px;
		border-radius: 10px;
		border: 1px solid ${theme.Gray20};
		background: ${theme.Gray10};
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
		z-index: 900;

		.searchFilterModalContent {
			display: flex;
			align-items: center;
			gap: 8px;
			color: ${theme.Gray80};
			border: 1px solid ${theme.Gray30};
			border-radius: 4px;
			font-size: 18px;
			font-weight: 500;
			padding: 4px 8px;
			margin-top: -1px;

			&:hover {
				opacity: 0.8;
			}
		}
	}

`