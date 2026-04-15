import Link from "next/link";

const getPredictedAge = async (name:string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name:string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name:string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

type PageProps = {
  params: {
    name: string;
  }
}

export default async function Page({ params }: PageProps){
  const { name } = await params;
  const agedata = getPredictedAge(name);
  const genderdata = getPredictedGender(name);
  const countrydata = getPredictedCountry(name);
  const decodedName = decodeURIComponent(name);

  const [age, gender, country] = await Promise.all([agedata, genderdata, countrydata])
  return(
    <div className="w-auto flex flex-col gap-12 items-center bg-light-color rounded-xl p-9 drop-shadow-lg">
      <div>
        <h1 className="text-dark-color font-black text-2xl md:text-4xl lg:text-6xl whitespace-nowrap">Personal Info</h1>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div>Name: <span className="font-bold">{decodedName}</span></div>
        <div>Age: <span className="font-bold">{age?.age}</span></div>
        <div>Gender: <span className="font-bold">{gender?.gender}</span></div>
        <div>Country: <span className="font-bold">{country?.country?.[0]?.country_id}</span></div>
      </div>
      <Link href="/">
        <button type="button" className="bg-dark-color py-4 px-12 text-lighter-color text-lg md:text-2xl lg:text-3xl rounded w-auto">Predict Again</button>
      </Link>
    </div>
  )
}