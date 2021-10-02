import React from 'react';
import {Grid, Text, Input, Button, Image } from '../elements';
import Upload from "../shared/Upload";

const PostWrite = (props) => {
    return(
        <React.Fragment>
            <Grid padding="16px">
                <Text margin="0px" size="36px" bold>
                    게시글 작성
                </Text>
                <input type="file"/>
            </Grid>
            <Grid>
                <Grid padding= "16px">
                    <Text margin="0px" size="24px" bold>미리보기</Text>
                </Grid>
                <Image shape="rectangle"/>
            </Grid>
            <Grid padding="16px">
                <Input label="게시글내용" placeholder="게시글 작성" multiLine/>
            </Grid>
            <Grid>
                <Button>게시글작성</Button>
            </Grid>
        </React.Fragment>
    )
}


export default PostWrite;