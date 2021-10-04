import React from 'react';
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";
import {Grid, Image, Text} from "../elements";

export const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.image_url}></Image>
                </Grid>
                <Grid padding="16px">
                    <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
                <Grid></Grid>
                {/* <div>user profile / user naem / insert_dt / is_me btn</div>
                <div>contents</div>
                <div>image</div>
                <div>comment cnt</div> */}
            </Grid>
        </React.Fragment>
        )
}

Post.defaultProps = {
    user_info: {
        user_name: "mean0",
        user_profile: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg"},
    image_url: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg",
    contents: "강아지네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00"
};

export default Post;