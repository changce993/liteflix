import { Text } from "components/atoms"
import { Wrapper, Span } from "./styled"
import { motion } from "framer-motion"
import { wrapper, container, item } from "./animations"

const PageLoader = () => {
  return (
    <Wrapper initial={wrapper.initial} animate={wrapper.animate}>
      <Text
        size="xl"
        color="primary"
        as={motion.p}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Span variants={item}>l</Span>
        <Span variants={item}>i</Span>
        <Span variants={item}>t</Span>
        <Span variants={item}>e</Span>
        <Span variants={item}>f</Span>
        <Span variants={item}>l</Span>
        <Span variants={item}>i</Span>
        <Span variants={item}>x</Span>
      </Text>
    </Wrapper>
  )
}
 
export default PageLoader