import { Column, Title, Tag } from "rbx";
import { Fade } from "../../Transition";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import util from "../../components/Utility.module.css";
import style from "../../components/Style.module.css";

const AcceptedFlag = () => {
  return (
    <Sidebar>
      <Column>
        <motion.div initial="initial" animate="in" exit="out" variants={Fade}>
          <Title size={4} className={util.mb_8}>
            Accepted Flag
          </Title>
          <hr className={style.c_hr} />
          <Column.Group className={`${util.mt_8} ${util.mb_8}`}>
            <Column>
              <Title subtitle size="6">
                Team ID: <Tag size="medium">T01</Tag>
              </Title>
            </Column>
            <Column>
              <Title subtitle size="6">
                Team Name: <Tag size="medium">mentimun_mentah</Tag>
              </Title>
            </Column>
          </Column.Group>
          <hr className={style.c_hr} />
        </motion.div>
      </Column>
    </Sidebar>
  );
};

export default AcceptedFlag;
