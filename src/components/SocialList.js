import {Link} from "react-router-dom";

const SocialList = (props) => {
    const social = props.data;
    return (
        <div className="media-icons">
            {social.facebook.length > 0 && (
                <Link to={social.facebook}><i className="fa fa-facebook-f"></i></Link>
            )}
            {social.twitter.length > 0 && (
                <Link to={social.twitter}><i className="fa fa-twitter"></i></Link>
            )}
            {social.instagram.length > 0 && (
                <Link to={social.instagram}><i className="fa fa-instagram"></i></Link>
            )}
            {social.youtube.length > 0 && (
                <Link to={social.youtube}><i className="fa fa-youtube"></i></Link>
            )}
        </div>
    )
}

export default SocialList