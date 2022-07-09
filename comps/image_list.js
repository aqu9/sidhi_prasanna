import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function DressImageList({ imageFilterList, filtered_element_data, set_filtered_element_data, open }) {
    let res = [];
    React.useEffect(() => {
        imageFilterList.map((element, index) => {
            console.log(element, 'element');
            element.value.map((eachElement) => {
                const test = itemData.find((eachData) => {
                    if (eachData['StyleType'] === eachElement) {
                        return eachData['StyleType'] === eachElement;
                    }
                    if (eachData['Sleeve'] === eachElement) {
                        return eachData['Sleeve'] === eachElement;
                    }
                    if (eachData['Character'] === eachElement) {
                        return eachData['Character'] === eachElement;
                    }
                    if (eachData['Pattern'] === eachElement) {
                        return eachData['Pattern'] === eachElement;
                    }
                });
                if (test) {
                    res.push(test);
                }
            });
        });
        if (res) {
            set_filtered_element_data(res);
        }
    }, [imageFilterList]);
    console.log(filtered_element_data, 'outside');
    return (
        <Box>
            <ImageList sx={{ marginLeft: open ? '240px' : '0px', px: 5 }}>
                {filtered_element_data &&
                    filtered_element_data?.map((item) => (
                        <ImageListItem key={item.img} sx={{ cursor: 'pointer' }}>
                            <Box
                                component='img'
                                src={`${item.img}?w=2048&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading='lazy'
                            />
                            <ImageListItemBar
                                title={
                                    <span style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                        {item.title} <ShoppingCartIcon/>
                                    </span>
                                }
                                subtitle={<span>Design: {item.design}</span>}
                                position='below'
                            />
                        </ImageListItem>
                    ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        id: 1,
        img: 'https://assets.ajio.com/medias/sys_master/root/20220322/zZrx/6239e35bf997dd03e22576a3/gulmohar_jaipur_navy_blue_floral_print_flared_kurta.jpg',
        title: 'GULMOHAR JAIPUR',
        design: 'Floral Print Flared Kurta',
        StyleType: 'Flared',
        Sleeve: 'Short',
        Character: 'Chutki',
        Pattern: 'Embroidery',
    },
    {
        id: 2,
        img: 'https://assets.ajio.com/medias/sys_master/root/20210810/5JjH/6111a82a7cdb8cb824f0c9de/avaasa_mix_n%27_match_blue_foil_print_flared_kurta.jpg',
        title: 'AVAASA MIX N MATCH',
        design: 'Foil Print Flared Kurta',
        design: 'Floral Print Flared Kurta',
        StyleType: 'Anarkali',
        Sleeve: 'Short',
        Character: 'Frozen',
        Pattern: 'Embroidery',
    },
    {
        id: 3,
        img: 'https://assets.ajio.com/medias/sys_master/root/20210602/DjPE/60b79e5ef997ddb312b51a11/avaasa_mix_n%27_match_red_micro_print_a-line_kurta_with_dipped_hemline.jpg',
        title: 'AVAASA MIX N MATCH',
        design: 'Micro Print A-line Kurta with Dipped Hemline',
        StyleType: 'Floral',
        Sleeve: 'Short',
        Character: 'Frozen',
        Pattern: 'Embroidery',
    },
    {
        id: 4,
        img: 'https://assets.ajio.com/medias/sys_master/root/20210706/H5rq/60e362f1f997ddb3121b93ee/avaasa_mix_n%27_match_blue_printed_sleeveless_a-line_kurta.jpg',
        title: 'AVAASA MIX N MATCH',
        design: 'Floral Print A-line Kurta with High-Low Hemline',
    },
    {
        id: 5,
        img: 'https://assets.ajio.com/medias/sys_master/root/20210525/6CP4/60ac252af997ddb312a81a3f/avaasa_mix_n%27_match_peach_floral_print_a-line_kurta_with_high-low_hemline.jpg',
        title: 'AVAASA MIX N MATCH',
        design: 'Floral Print Button-Up Kurta',
    },
    {
        id: 6,
        img: 'https://assets.ajio.com/medias/sys_master/root/20220523/d845/628b99feaeb26921afc8c209/aks_green_floral_print_button-up_kurta.jpg',
        title: 'AVAASA MIX N MATCH',
        design: 'V-neck Flared Kurta with Patterned Weave',
    },
    {
        id: 7,
        img: 'https://assets.ajio.com/medias/sys_master/root/20220225/fiQ7/6217ec43aeb26921afb66289/janasya_green_v-neck_flared_kurta_with_patterned_weave.jpg',
        title: 'GULMOHAR JAIPUR',
        design: 'Embellished Straight Kurta',
    },
    {
        id: 8,
        img: 'https://assets.ajio.com/medias/sys_master/root/20211225/BdRw/61c61b28f997ddf8f1604348/avaasa_mix_n%27_match_red_printed_a-line_kurta_with_tie-up.jpg',
        title: 'SEE DESIGNS',
        design: 'Printed Band-Collar Straight Kurta',
    },
    {
        id: 9,
        img: 'https://assets.ajio.com/medias/sys_master/root/20211012/1r5d/6165ac63f997dd3ed46c9386/see_designs_blue_printed_band-collar_straight_kurta.jpg',
        title: 'AVAASA MIX N MATCH',
        design: 'Floral Print A-line Kurta with High-Low Hemline',
    },
    {
        id: 10,
        img: 'https://assets.ajio.com/medias/sys_master/root/20210408/FJDQ/606f2f53aeb269a9e387cdee/avaasa_mix_n%27_match_mustard_yellow_floral_print_a-line_kurta_with_high-low_hemline.jpg',
        title: 'GULMOHAR JAIPUR',
        design: 'Micro Print A-line Kurta with Dipped Hemline',
    },
    {
        id: 11,
        img: 'https://assets.ajio.com/medias/sys_master/root/20211002/prHm/6157a9fcf997ddce89ecf253/avaasa_mix_n%27_match_magenta_floral_print_anarkali_kurta_with_mandarin_collar.jpg',
        title: 'GOSRIKI',
        design: 'Printed Round-Neck Flared Kurta',
    },
    {
        id: 12,
        img: 'https://assets.ajio.com/medias/sys_master/root/20210828/RGqM/612a031aaeb269a2688150e3/four_seasons_blue_floral_print_round-neck_straight_kurta.jpg',
        title: 'FOUR SEASONS',
        design: 'Floral Print Round-Neck Straight Kurta',
    },
];
