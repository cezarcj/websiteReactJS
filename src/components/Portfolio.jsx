import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ButtonBases from "./ButtonBases";
import images from './Images';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
	},
	titleBar: {
		background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
		'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
	icon: {
		color: 'white',
	},
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const motoData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
class AdvancedGridList extends React.Component {
	state = {
		filterBy: "any",
		images
	};

	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<ButtonBases filterBy={(cat) => this.filterBy(cat)}/>
				<GridList cellHeight={200} spacing={1} className={classes.gridList}>
					{this.state.images.map((images, index) => (
						<GridListTile key={index} cols={images.featured ? 2 : 1} rows={images.featured ? 2 : 1}>
							<img src={images.img} alt={images.title}/>
							<GridListTileBar
								title={images.title}
								titlePosition="top"
								actionIcon={
									<IconButton className={classes.icon}>
										<StarBorderIcon />
									</IconButton>
								}
								actionPosition="left"
								className={classes.titleBar}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		);
	}

	filterBy(category) {
		this.setState({
			images: images.filter(i => {
				if (category === "any") {
					return true;
				}

				return i.category === category;
			})
		})
	};
}

AdvancedGridList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);