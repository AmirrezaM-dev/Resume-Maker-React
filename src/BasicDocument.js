import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	PDFViewer,
	Font,
	Link,
} from "@react-pdf/renderer"
import {
	faCalendar,
	faEnvelope,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import FontAwesomeIcon from "./FontAwesomeIcon"

Font.register({
	family: "Rubik",
	fonts: [
		{ src: require("./fonts/Rubik/Rubik-Regular.ttf") },
		{
			src: require("./fonts/Rubik/Rubik-Black.ttf"),
			fontStyle: "black",
		},
		{
			src: require("./fonts/Rubik/Rubik-Bold.ttf"),
			fontStyle: "bold",
		},
		{
			src: require("./fonts/Rubik/Rubik-Light.ttf"),
			fontStyle: "light",
		},
	],
})

// Create styles
const styles = StyleSheet.create({
	page: {
		paddingTop: "20px",
		paddingHorizontal: "15px",
		backgroundColor: "white",
		color: "black",
		border: "5px solid black",
		fontFamily: "Rubik",
	},
	viewer: {
		width: window.innerWidth, //the pdf viewer will take up all of the width and height
		height: window.innerHeight,
	},
	name: {
		fontSize: "24px",
		fontStyle: "black",
		marginBottom: "5px",
	},
	title: {
		color: "#9d4536",
		fontStyle: "bold",
		marginBottom: "10px",
	},
	contact: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginBottom: 10,
		marginHorizontal: "auto",
		fontStyle: "light",
		fontSize: "12px",
	},
	contactItems: {
		flexGrow: 1,
		marginRight: "35px",
		marginVertical: "3px",
	},
	contactIcon: {
		width: "10px",
		fontSize: "5px !important",
		marginRight: "3px",
		color: "gray",
	},
	container: {
		flexGrow: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch",
		padding: 10,
	},
	row: {
		flexGrow: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "stretch",
		marginBottom: 10,
	},
	col1: {
		marginHorizontal: "10px",
		flexBasis: "8.33%",
	},
	col2: {
		marginHorizontal: "10px",
		flexBasis: "16.66%",
	},
	col3: {
		marginHorizontal: "10px",
		flexBasis: "25%",
	},
	col4: {
		marginHorizontal: "10px",
		flexBasis: "33.33%",
	},
	col5: {
		marginHorizontal: "10px",
		flexBasis: "41.66%",
	},
	col6: {
		marginHorizontal: "10px",
		flexBasis: "50%",
	},
	col7: {
		marginHorizontal: "10px",
		flexBasis: "58.33%",
	},
	col8: {
		marginHorizontal: "10px",
		flexBasis: "66.66%",
	},
	col9: {
		marginHorizontal: "10px",
		flexBasis: "75%",
	},
	col10: {
		marginHorizontal: "10px",
		flexBasis: "83.33%",
	},
	col11: {
		marginHorizontal: "10px",
		flexBasis: "91.66%",
	},
	col12: {
		marginHorizontal: "10px",
		flexBasis: "100%",
	},

	column: {
		marginRight: 10,
		marginBottom: 5,
	},
	columnHeader: {
		fontSize: 18,
		fontStyle: "bold",
		borderBottom: "2px solid black",
	},
	columnItemHeader: {
		fontSize: 14,
	},
	columnItemCompany: {
		fontSize: 12,
		color: "#9d4536",
	},
	columnItemInfo: {
		fontSize: 10,
	},
	columnItemEducation: {
		fontSize: 10,
	},
	header: {
		borderBottom: "2px solid black",
		fontStyle: "bold",
	},
})

// Create Document Component
function BasicDocument() {
	return (
		<PDFViewer style={styles.viewer}>
			{/* Start of the document*/}
			<Document>
				{/*render a single page*/}
				<Page size="A4" style={styles.page}>
					<View style={styles.name}>
						<Text>Amirreza Malaki</Text>
					</View>
					<View style={styles.title}>
						<Text>Full-Stack Developer</Text>
					</View>
					<View style={styles.contact}>
						<FontAwesomeIcon
							style={{ ...styles.contactIcon, marginTop: "3px" }}
							faIcon={faEnvelope}
						/>
						<Link style={styles.contactItems}>
							amir001mlk@gmail.com
						</Link>
						<FontAwesomeIcon
							style={styles.contactIcon}
							faIcon={faPhone}
						/>
						<Text style={styles.contactItems}>
							+971 58 851 7790
						</Text>
						<FontAwesomeIcon
							style={styles.contactIcon}
							faIcon={faLocationDot}
						/>
						<Text style={styles.contactItems}>
							Barsha Heights/Tecom
						</Text>
					</View>
					<View style={styles.contact}>
						<FontAwesomeIcon
							style={{ ...styles.contactIcon, marginTop: "2px" }}
							faIcon={faLinkedin}
						/>
						<Link
							style={styles.contactItems}
							src="https://www.linkedin.com/in/amirreza-malaki-859513263/"
						>
							LinkedIn
						</Link>
						<FontAwesomeIcon
							style={{ ...styles.contactIcon, marginTop: "2px" }}
							faIcon={faGithub}
						/>
						<Link
							style={styles.contactItems}
							src="https://Github.com/AmirrezaM-dev"
						>
							Github
						</Link>
						<Link style={styles.contactItems}></Link>
					</View>
					<View style={styles.container}>
						<View style={styles.row}>
							<View style={[styles.col8]}>
								<Text style={styles.header}>
									WORK EXPERIENCE
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginTop: "5px",
										fontSize: "14px",
									}}
								>
									Programming Tutor
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemCompany,
									}}
								>
									Preply.com
								</Text>
								<View style={{ ...styles.contact, margin: 0 }}>
									<FontAwesomeIcon
										style={{
											...styles.contactIcon,
										}}
										faIcon={faCalendar}
									/>
									<Text style={styles.contactItems}>
										October 2023 - Current
									</Text>
									<FontAwesomeIcon
										style={{
											...styles.contactIcon,
										}}
										faIcon={faLocationDot}
									/>
									<Text style={styles.contactItems}>
										UAE/Dubai
									</Text>
									<Link style={styles.contactItems}></Link>
								</View>
								<Text
									style={{
										marginRight: "20px",
										marginBottom: "15px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp; Educated multiple
									individuals in programming, aiding them in
									web application development.{" "}
									<Link src="https://preply.com/en/tutor/3268760">
										My Profile
									</Link>
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginTop: "5px",
										fontSize: "14px",
									}}
								>
									Fullstack web developer
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemCompany,
									}}
								>
									Upload Group
								</Text>
								<View style={{ ...styles.contact, margin: 0 }}>
									<FontAwesomeIcon
										style={{
											...styles.contactIcon,
										}}
										faIcon={faCalendar}
									/>
									<Text style={styles.contactItems}>
										August 2020 - September 2022
									</Text>
									<FontAwesomeIcon
										style={{
											...styles.contactIcon,
										}}
										faIcon={faLocationDot}
									/>
									<Text style={styles.contactItems}>
										Turkey/Istanbul
									</Text>
									<Link style={styles.contactItems}></Link>
								</View>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp; Developed and maintained
									websites for Upload Group, focusing on real
									estate, medical, and tourism sectors.
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginBottom: "15px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp; Managed the company's
									primary website and crafted multiple
									websites for various business segments.
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginTop: "5px",
										fontSize: "14px",
									}}
								>
									COMPLETED PROJECTS
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemCompany,
									}}
								>
									Freelance
								</Text>
								<View style={{ ...styles.contact, margin: 0 }}>
									<FontAwesomeIcon
										style={{
											...styles.contactIcon,
										}}
										faIcon={faCalendar}
									/>
									<Text style={styles.contactItems}>
										August 2018 - 2022
									</Text>
									<FontAwesomeIcon
										style={{
											...styles.contactIcon,
										}}
										faIcon={faLocationDot}
									/>
									<Text style={styles.contactItems}>
										Remote
									</Text>
									<Link style={styles.contactItems}></Link>
								</View>
								<Text
									style={{
										marginRight: "20px",
										marginBottom: "5px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Created a Persian version
									of webnovel.com, enabling users to manage
									their book libraries and track reading
									progress.
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginBottom: "5px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Developed a Telegram bot
									for music enthusiasts, allowing song search
									via lyrics.
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginBottom: "5px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp; Designed a web application
									for AntiqBar, a family restaurant in
									Tbilisi, Georgia, facilitating order
									management and communication between
									waitstaff and kitchen.
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginBottom: "5px",
										...styles.columnItemInfo,
									}}
								>
									For more projects, visit my{" "}
									<Link
										style={styles.contactItems}
										src="https://Github.com/AmirrezaM-dev"
									>
										Github
									</Link>
								</Text>
							</View>
							<View style={[styles.col4]}>
								<Text
									style={{
										...styles.header,
										marginBottom: "5px",
									}}
								>
									EDUCATION
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										fontSize: "10px",
										fontStyle: "bold",
									}}
								>
									B.S. in Accounting
								</Text>
								<Text
									style={{
										marginRight: "20px",
										marginBottom: "10px",
										...styles.columnItemInfo,
										fontSize: "8px",
									}}
								>
									17.5 ON A 20 SCALE
								</Text>
								<Text
									style={{
										...styles.header,
										marginBottom: "5px",
									}}
								>
									Skills
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;Full Stack
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Frontend
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Backend
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Project Management Skills
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Web Design
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Web Development
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;TypeScript
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;JavaScript
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;Next.js
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;React.js
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;Node.js
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;Express.js
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;PHP
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;Laravel
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;API/Rest API
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Databases
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;MongoDB
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
										backgroundColor: "lightgray",
									}}
								>
									{"\u2022"} &nbsp;MySQL/Apache
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;HTML
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;CSS
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Bootstrap
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Electron.js
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;JSON
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;jQuery
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Github
								</Text>
								<Text
									style={{
										marginRight: "20px",
										...styles.columnItemInfo,
									}}
								>
									{"\u2022"} &nbsp;Photoshop
								</Text>
							</View>
						</View>
					</View>
				</Page>
			</Document>
		</PDFViewer>
	)
}
export default BasicDocument
