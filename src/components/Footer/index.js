import React from 'react';
import * as S from './styled';
import Linkedin from '../../icons/linkedin.svg';
import Github from '../../icons/github.svg';
import Gmail from '../../icons/gmail.svg';

function Footer() {
    return (
        <S.Principle>
            <S.Footer>
                <S.BoxList>
                    <S.List>
                        <S.Item><S.Link><img height={43} src={Github} /></S.Link></S.Item>
                        <S.Item><S.Link><img height={30} src={Linkedin} /></S.Link></S.Item>
                        <S.Item><S.Link><img height={30} src={Gmail} /></S.Link></S.Item>
                    </S.List>
                </S.BoxList>
            </S.Footer>
        </S.Principle>

    );
}

export default Footer;