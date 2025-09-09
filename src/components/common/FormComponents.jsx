export function Input({ label, value, onChange, placeholder }) {
    return (
      <div className="grid gap-1">
        <Label title={label} />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }


  
export function Label({ title }) {
    return <label className="text-sm font-medium text-gray-700">{title}</label>;
  }
  

export function NumberInput({ label, value, onChange, placeholder }) {
    return (
      <div className="grid gap-1">
        <Label title={label} />
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }
  
export { Input as default };