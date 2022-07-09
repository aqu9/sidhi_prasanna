import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Custom_Grid from '../comps/custom_grid';
import DressImageList from '../comps/image_list';
import SIDEBAR from '../comps/sidebar';

const Model = () => {
    const { query } = useRouter();
    const data = [
        {
            Kurtas: {
                sidebar: [
                    {
                        id: 1,
                        label: 'StyleType',
                        value: ['Straight', 'A-line', 'Flared', 'Anarkali', 'Angrakha'],
                    },
                    {
                        id: 2,
                        label: 'Sleeve',
                        value: ['3/4th sleeve', '3/4th', 'Sleeveless', 'Short', 'Full-length'],
                    },
                    {
                        id: 3,
                        label: 'Pattern',
                        value: ['Floral', 'Embroidery', 'Solid', 'Indian', 'Geometric'],
                    },
                    {
                        id: 4,
                        label: 'StyleType',
                        value: ['Round', 'Collar', 'V', 'Boat', 'Stylised'],
                    },
                    {
                        id: 5,
                        label: 'Character',
                        value: ['Others', 'Chutki', 'Frozen', 'Arrow', 'AngryBirds'],
                    },
                    {
                        id: 6,
                        label: 'Traditional_Weave',
                        value: ['Chanderi', 'Bagru', 'Handloom', 'Bandhej', 'Ikat/Pochampally/Patola'],
                    },
                    {
                        id: 7,
                        label: 'Shape',
                        value: ['Curve', 'Maternity', 'Petite', 'Regular'],
                    },
                    {
                        id: 8,
                        label: 'Fabric',
                        value: ['Cotton', 'Rayon', 'Viscose', 'Crepe', 'Polyester'],
                    },
                ],
            },
        },
    ];

    const [imageFilterList, setImageFilterList] = useState([]);
    const [filtered_element_data, set_filtered_element_data] = useState([]);

    const filtered_data = data.filter((eachData) => {
        if (eachData[query.title] != null) {
            return eachData[query.title];
        } else return data;
    });
    const sidebarFunction = (data) => {
        setImageFilterList([...data]);
    };
    useEffect(() => {
        console.log(imageFilterList.length);
    }, [imageFilterList.length]);

    const [open, setOpen] = useState(false);

    return (
        <Box>
            <Box>
                <SIDEBAR
                    data={filtered_data[0]['Kurtas'].sidebar}
                    sidebarFunction={sidebarFunction}
                    imageFilterList={imageFilterList}
                    filtered_element_data={filtered_element_data}
                    set_filtered_element_data={set_filtered_element_data}
                    setOpen={setOpen}
                    open={open}
                />
            </Box>
            <Box>
                <DressImageList
                    imageFilterList={imageFilterList}
                    filtered_element_data={filtered_element_data}
                    set_filtered_element_data={set_filtered_element_data}
                    open={open}
                />
            </Box>
        </Box>
    );
};

export default Model;
