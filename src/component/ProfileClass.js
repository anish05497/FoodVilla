import React from "react";
// import { GITHUB_GET_USER} from "../utils/constant";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        bio: "Dummy Context",
      },
    };
    console.log(this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/" + this.props.name);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div className="flex flex-col justify-center items-center mt-4 gap-5">
        <div>
          <img
            className="rounded-full h-[350px] w-[350px] border-none align-middle"
            src={userInfo.avatar_url}
            alt={userInfo.name}
          />
        </div>
        <div>
          <p className="text-xl font-bold text-bio pt-5 mt-0 mb-4">
            {userInfo.bio}
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileClass;
