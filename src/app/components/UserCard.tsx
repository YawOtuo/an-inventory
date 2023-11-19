import Image from "next/image";

type Props = {
  user: any;
};
export default function UserCard({ user }: Props) {
  return (
    <div>
 <p>
          <div className="relative aspect-square w-[200px] rounded-full overflow-hidden ">
            <Image src={"/testimage1.png"} fill alt="Image" />
          </div>
 </p>
    </div>
  );
}
