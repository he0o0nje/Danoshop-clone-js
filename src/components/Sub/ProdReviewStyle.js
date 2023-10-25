import styled from "styled-components";

export const ProdReview = styled.div`
  padding-top: 15rem;
`;

export const ReviewWrap = styled.div`
  width: 100%;
  margin: 3.2rem 0;
  padding: 0 3.2rem 4.4rem;
  font-size: 1.2rem;
  background: transparent;
  font-family: "돋움", Dotum, Helvetica, "Apple SD Gothic Neo", Sans-serif;
  .header {
    display: flex;
    border-bottom: 0.2rem solid #14161a;
    padding: 1.6rem 0;
    .title_wrap {
      flex-grow: 1;
      line-height: 3rem;
      font-size: 2rem;
      color: #14161a;
      .review_count {
        letter-spacing: 0.05rem;
        font-weight: bold;
        margin-left: 0.4rem;
      }
    }
    .all_review {
      display: flex;
      height: 2rem;
      margin-top: 0.3rem;
      a {
        white-space: nowrap;
        font-size: 1.6rem;
        color: #707680;
        padding: 0 0 1.6rem 1.2rem;
      }
    }
  }
`;

export const ReviewSummary = styled.div`
  padding: 3.2rem 0;
  border-bottom: 0.1rem solid #ebeff5;
  display: flex;
  .left_content {
    width: 40rem;
    min-height: 12.2rem;
    border-right: solid 0.1rem #d8dde5;
    text-align: center;
    .icon {
      width: 4.8rem;
      height: 4.8rem;
      margin: 1.2rem 0;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      margin-left: 0.4rem;
      font-size: 4.8rem;
      font-weight: bold;
      line-height: 7.2rem;
      color: #14161a;
      vertical-align: bottom;
    }
    .score_percentage {
      margin-top: 0.8rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
      text-align: center;
      color: #14161a;
      b {
        font-weight: bold;
      }
    }
    .create_review_btn {
      margin-top: 2.4rem;
      background-color: #14161a;
      color: #fff;
      width: 15.8rem;
      height: 4.4rem;
      border-radius: 0.4rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  .right_content {
    margin-top: 2.5rem;
    padding-left: 6.4rem;
    width: calc(100% - 40rem - 0.1rem);
    vertical-align: top;
    li + li {
      margin-top: 0.8rem;
    }
    li {
      display: flex;
      .title {
        width: 7rem;
        margin-right: 1.2rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #707680;
      }
      .gauge {
        width: calc(100% - 15.8rem);
        height: 1.2rem;
        margin: 0.3rem 0 0.3rem 0;
        border-radius: 0.8rem;
        background-color: #ebeff5;
        .percentile {
          height: 1.2rem;
          border-radius: 0.8rem;
          background-color: #bcc2cc;
        }
      }
      .count {
        width: 6.4rem;
        margin-left: 1.2rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #707680;
      }
    }
    .highlighted {
      font-weight: bold;
      .title {
        color: #14161a;
      }
      .gauge {
        .percentile {
          background-color: #ff8934;
        }
      }
      .count {
        color: #14161a;
      }
    }
  }
`;

export const MediaSummary = styled.div`
  position: relative;
  padding: 3.2rem 0;
  border-bottom: 0.1rem solid #ebeff5;
  .header {
    margin: 0;
    padding: 0;
    border: 0;
    .title_wrap {
      display: inline-block;
      font-size: 1.6rem;
      line-height: 2.4rem;
      vertical-align: middle;
      text-align: left;
      color: #14161a;
      .review_count {
        font-weight: bold;
        margin-left: 0.4rem;
      }
    }
    .more_btn {
      font-size: 1.4rem;
      line-height: 2rem;
      color: #707680;
      .show_all_arrow {
        position: relative;
        top: -0.2rem;
        margin-left: 0.6rem;
        transform: rotate(270deg);
        stroke: #bcc2cc;
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
  .summary_content {
    padding-top: 1.6rem;
    font-size: 0;
    overflow: hidden;
    min-width: 72rem;
    max-width: 256rem;
    li + li {
      margin-left: 0.8rem;
    }
    li {
      width: calc((100% - 5.6rem) / 8 - 0.1rem);
      padding-bottom: calc((100% - 5.6rem) / 8);
      cursor: pointer;
      display: inline-block;
      overflow: hidden;
      position: relative;
      height: 0;
      border-radius: 0.4rem;
      img {
        position: absolute;
        width: 100%;
        border-radius: 0.4rem;
      }
    }
  }
`;

export const SortFilter = styled.div`
  position: relative;
  ul {
    border-bottom: 0.1rem solid #ebeff5;
    .basic_sort {
      display: inline-block;
      width: 18%;
      min-width: 11.5rem;
      ul {
        display: block;
        margin-left: 1.2rem;
        li {
          cursor: pointer;
          display: inline-block;
          padding: 2.2rem 1.2rem;
          font-size: 1.4rem;
          line-height: 2rem;
          color: #bcc2cc;
        }
        .selected {
          color: #14161a;
          font-weight: bold;
        }
      }
    }
    .search {
      float: right;
      padding: 1.6rem 0 1.6rem 0.8rem;
      .input_container {
        background: #ffffff;
        position: relative;
        box-sizing: border-box;
        height: 3.2rem;
        width: 23.8rem;
        border: solid 0.1rem #d8dde5;
        border-radius: 0.4rem;
        input {
          font-size: 1.2rem;
          color: #14161a;
          line-height: 1.8rem;
          width: calc(100% - 7rem);
          margin: 0.6rem 0.8rem 0.6rem 3.2rem;
          text-overflow: ellipsis;
        }
        a {
          position: absolute;
          border-radius: 0.5rem;
          background-color: white;
          margin: 0.1rem;
          padding: 0.6rem;
          left: 0;
          font-size: 0;
          .search_input_icon {
            height: 1.6rem;
            width: 1.6rem;
            stroke: #bcc2cc;
          }
        }
      }
    }
    .media_first {
      float: right;
      .toggle_btn {
        font-size: 1.4rem;
        line-height: 2rem;
        padding: 2.2rem 0.8rem 2.2rem 2.2rem;
        display: inline-block;
        color: #707680;
        svg {
          display: none;
          stroke: #bcc2cc;
          width: 1.6rem;
          height: 1.6rem;
          vertical-align: text-bottom;
          margin-right: 0.5rem;
        }
        .on {
          display: inline-block;
        }
      }
    }
  }
  .filter_list {
    position: relative;
    border-bottom: 0.1rem solid #ebeff5;
    ul {
      position: relative;
      display: flex;
      li {
        padding: 1.2rem 0.4rem 1.2rem 0;
        .filter_btn {
          border-radius: 0.4rem;
          border: solid 0.1rem #ebeff5;
          background-color: #ffffff;
          .dropdown {
            cursor: pointer;
            padding: 0.8rem 1.2rem;
            .dropdown_btn {
              font-size: 1.2rem;
              line-height: 1.8rem;
              color: #14161a;
              .dropdown_arrow {
                width: 0.8rem;
                height: 0.8rem;
                margin-left: 0.7rem;
                stroke: #bcc2cc;
              }
            }
          }
        }
      }
    }
  }
`;

export const ReviewList = styled.div`
  .review_list {
    border-bottom: 0.1rem solid #dadada;
    transition: opacity 0.3s ease-out;
    li {
      padding: 3.2rem 0;
      border-bottom: 0.1rem solid #d8dde5;
      .left_content {
        display: inline-block;
        border-right: 0.1rem solid #d8dde5;
        padding-right: 4rem;
        vertical-align: top;
        box-sizing: border-box;
        width: 75%;
        .tag_section {
          margin-bottom: 0.8rem;
          span + span {
            margin-left: 0.4rem;
          }
          span {
            padding: 0.4rem 0.8rem;
            border-radius: 0.4rem;
            border: solid 0.1rem #ebeff5;
            background-color: #fafcff;
            font-size: 1.2rem;
            font-weight: bold;
            line-height: 1.8rem;
            color: #707680;
            white-space: nowrap;
          }
        }
        .score_section {
          min-height: 2rem;
          .score_container {
            display: inline-block;
            .score_star {
              display: inline-block;
              div {
                width: 2rem;
                height: 2rem;
                display: inline-block;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .score_text {
              display: inline-block;
              vertical-align: text-bottom;
              margin-left: 0.8rem;
              font-size: 1.4rem;
              font-weight: bold;
              line-height: 2rem;
              color: #14161a;
              white-space: nowrap;
            }
          }
          .edit_container {
            position: relative;
            float: right;
            .date {
              display: inline-block;
              color: #707680;
              padding: 0.1rem 0;
            }
          }
        }
        .content_section {
          margin-top: 2rem;
          font-size: 1.3rem;
          line-height: 1.8rem;
          color: #14161a;
          position: relative;
          transition: opacity 0.3s ease-out;
          .message {
            max-height: 5.4rem;
            overflow: hidden;
            box-sizing: content-box;
          }
        }
        .like_section {
          margin-top: 2rem;
          height: 2rem;
          .comment_info {
            display: inline-block;
            a {
              padding: 1.6rem 1.6rem 1.6rem 0;
              color: #707680;
              .text {
                font-size: 1.2rem;
                line-height: 1.8rem;
              }
              .count {
                margin: 0 0.4rem;
                font-weight: bold;
              }
              svg {
                width: 0.8rem;
                height: 0.8rem;
                stroke: #bcc2cc;
              }
            }
          }
        }
      }
      .right_content {
        display: inline-block;
        padding-left: 4rem;
        vertical-align: top;
        box-sizing: border-box;
        width: 25%;
        .user_name_msg {
          margin-bottom: 0.4rem;
          color: #14161a;
          overflow: hidden;
          text-overflow: ellipsis;
          b {
            font-weight: bold;
          }
        }
        .options_section {
          margin-top: 1.2rem;
          span {
            font-size: 1.2rem;
            line-height: 1.8rem;
            color: #707680;
          }
          .name {
            margin-right: 0.4rem;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export const ReviewPagination = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  .pagination {
    display: block;
    .disabled {
      pointer-events: none;
      color: #d7d4d4;
    }
    a {
      display: inline-block;
      box-sizing: border-box;
      width: 4rem;
      height: 4rem;
      line-height: 4rem;
      text-align: center;
      cursor: pointer;
      *cursor: hand;
      color: #4a4a4a;
      font-size: 1.5rem;
      margin-right: 1rem;
    }
    .active {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
