import React from 'react';
import * as S from './styled';
import Github from '../../icons/github.svg';
import Linkedin from '../../icons/linkedin.svg';
import Gmail from '../../icons/gmail.svg';

function Footer() {
    return (

        <S.Footer>
            <S.BoxList>
                <S.List>
                    <S.Item>
                        <S.Link href="https://github.com/Matheuslbrum">
                            <S.Image src={Github} />
                        </S.Link>
                    </S.Item>
                    <S.Item>
                        <S.Link href="https://www.linkedin.com/in/matheuslbrum/">
                            <S.Image src={Linkedin} />
                        </S.Link>
                    </S.Item>
                    <S.Item>
                        <S.Link href="mailto:matheusdelimabrum@gmail.com">
                            <S.Image src={Gmail} />
                        </S.Link>
                    </S.Item>
                </S.List>
            </S.BoxList>
        </S.Footer>


    );
}

export default Footer;