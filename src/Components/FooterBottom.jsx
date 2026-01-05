function FooterBottom() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-gray-700">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Daraz International</span>

          <div className="flex flex-wrap gap-4">
            {[
              { name: "Pakistan", img: "https://img.lazcdn.com/us/domino/1fe7d756-2469-4d8e-82b2-d5eb7cbad875_PK-84-84.png"},
              { name: "Bangladesh", img: "https://img.lazcdn.com/us/domino/05a4ef2c-095c-407d-9295-aa45b5412de0_PK-84-84.png" },
              { name: "Sri Lanka", img: "https://img.lazcdn.com/us/domino/5536488d-c32a-44eb-8307-ed6651d907da_PK-84-84.png" },
              { name: "Myanmar", img: "https://img.lazcdn.com/us/domino/8896f696-b36f-4cb1-8576-2e86eed05046_PK-84-84.png" },
              { name: "Nepal", img: "https://img.lazcdn.com/us/domino/39f7f111-619f-47cd-993c-a551aaed15fd_PK-86-86.png" },
            ].map((country) => (
              <div key={country.name} className="flex items-center gap-2">
                <img
                  src={country.img}
                  alt={country.name}
                  className="h-7 w-7 object-contain"
                />
                <span className="whitespace-nowrap">{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          <span className="font-semibold">Follow Us</span>

          <div className="flex gap-3">
            <img src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png" className="h-7 cursor-pointer" />
            <img src="https://img.lazcdn.com/us/domino/53d2eeea-55ed-4da7-99d6-31f9814b8e3e_PK-75-76.png" className="h-7 cursor-pointer" />
            <img src="https://img.lazcdn.com/us/domino/f03a43e7-3655-4049-8c12-b1614ac2a2d4_PK-75-76.png" className="h-7 cursor-pointer" />
            <img src="https://img.lazcdn.com/us/domino/6bf9555a-40ae-466d-a756-907f70aa3461_PK-76-76.png" className="h-7 cursor-pointer" />
          </div>
        </div>

        <div className="text-gray-500 text-center md:text-right">
          © Daraz 2026
        </div>

      </div>
    </div>
  );
}

export default FooterBottom;