import { GetServerSideProps } from "next";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { Video } from "@/typing";
import VideoCard from "@/components/VideoCard";
import NoResults from "@/components/NoResults";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length
        ? videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        ))
        : <NoResults text={`No Videos`} />}
    </div>
  );
};

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  return {
    props: {
      videos: data
    }
  };

};
