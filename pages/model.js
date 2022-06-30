import { useRouter } from "next/router";
import Custom_Grid from "../comps/custom_grid";
import SIDEBAR from "../comps/sidebar";

const Model = () => {
  const { query } = useRouter();
  const data = [
    {
      Kurtas: {
        sidebar: [
          {
            sidebar_data_details: [
              {
                label:"StyleType",
                value: [
                  "Straight",
                  "A-line",
                  "Flared",
                  "Anarkali",
                  "Angrakha",
                ],
              },
              {
                label:"Sleeve",
                value: [
                  "3/4th sleeve",
                  "3/4th",
                  "Sleeveless",
                  "Short",
                  "Full-length",
                ],
              },
              {
                label:"Pattern",
                value: [
                  "Floral",
                  "Embroidery",
                  "Solid",
                  "Indian",
                  "Geometric",
                ],
              },
              { label:"StyleType",value: ["Round", "Collar", "V", "Boat", "Stylised"] },
              {
                label:"Character",
                value: [
                  "Others",
                  "Chutki",
                  "Frozen",
                  "Arrow",
                  "AngryBirds",
                ],
              },
              {
                label:"Traditional_Weave",
                value: [
                  "Chanderi",
                  "Bagru",
                  "Handloom",
                  "Bandhej",
                  "Ikat/Pochampally/Patola",
                ],
              },
              {label:"Shape", value: ["Curve", "Maternity", "Petite", "Regular"] },
              {label:"Fabric", value: ["Cotton", "Rayon", "Viscose", "Crepe", "Polyester"] },
            ],
          },
        ],
      },
    },
  ];

  const filtered_data = data.filter((eachData) => {
    if (eachData[query.title] != null) {
      return eachData[query.title];
    } else return data;
  });
  console.log(filtered_data)
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{query.title}</h1>
      <SIDEBAR data={filtered_data[0]["Kurtas"].sidebar[0].sidebar_data_details} />
    </div>
  );
};

export default Model;
