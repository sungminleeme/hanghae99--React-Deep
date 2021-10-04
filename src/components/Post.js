import React from 'react';
// import Grid from "../elements/Grid"; import Image from "../elements/Image";
// import Text from "../elements/Text";
import {Grid, Image, Text, Button} from "../elements";
import {history} from "../redux/configureStore";

export const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex="is_flex" padding="16px">
                    <Grid is_flex="is_flex" width="auto">
                        <Image shape="circle" src={props.src}/>
                        <Text bold="bold">{props.user_info.user_name}</Text>
                    </Grid>
                    <Grid is_flex="is_flex" width="auto">
                        {
                            props.is_me && (
                                <Button
                                    width="auto"
                                    padding="4px"
                                    margin="4px"
                                    _onClick={() => {
                                        history.push(`/write/${props.id}`)
                                    }}>수정</Button>
                            )
                        }
                        <Text>{props.insert_dt}</Text>
                    </Grid>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.image_url}/>
                </Grid>
                <Grid padding="16px">
                    <Text margin="0px" bold="bold">댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "mean0",
        user_profile: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg"
    },
    image_url: "https://likerdo-bucket-list.s3.ap-northeast-2.amazonaws.com/yui.jpg",
    contents: "강아지네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
    is_me: false,
};

export default Post;