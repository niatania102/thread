function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      {/* flex-col to make the elements to appear one on top of another */}
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
      </div>
    </section>
  );
}

export default RightSidebar;
