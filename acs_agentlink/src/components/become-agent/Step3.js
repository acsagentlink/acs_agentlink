import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function Step3() {
  const {
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const languagesList = ["English", "French", "Spanish", "German", "Mandarin"]; // Example languages
  const watchedLanguages = watch("languages", []); // Watch the form state for languages

  const handleLanguageChange = (index, field, value) => {
    setValue(`languages.${index}.${field}`, value);
  };

  return (
    <>
          <h2 className="text-2xl mb-2">Skills and Qualifications</h2>
      <div className="space-y-5">
        {/* Languages & Skills Section */}
        <div className="space-y-2">
          {languagesList.map((language, index) => {
            const selected = watchedLanguages?.[index]?.selected || false;
            const percent = watchedLanguages?.[index]?.percent || 0;

            return (
              <div
                key={language}
                className="flex items-center gap-4 border-b pb-4"
              >
                <Input
                  type="checkbox"
                  id={`languages.${index}.selected`}
                  className="h-5 w-5"
                  checked={selected}
                  onChange={(e) =>
                    handleLanguageChange(index, "selected", e.target.checked)
                  }
                />

                <Label
                  htmlFor={`languages.${index}.selected`}
                  className="text-lg font-medium flex-1"
                >
                  {language}
                </Label>

                <div className="flex items-center gap-4 w-1/2">
                  <Input
                    type="range"
                    {...register(`languages.${index}.percent`)}
                    id={`languages.${index}.percent`}
                    value={percent}
                    disabled={!selected} // Disable slider if language is not selected
                    onChange={(e) =>
                      handleLanguageChange(
                        index,
                        "percent",
                        parseInt(e.target.value)
                      )
                    }
                    min={0}
                    max={100}
                    step={10}
                    className={`w-full ${
                      selected ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                  />
                  <span className="text-sm font-medium">{percent}%</span>
                </div>
              </div>
            );
          })}

          {errors.languages && (
            <p className="text-red-500 text-sm">{errors.languages.message}</p>
          )}
        </div>


      </div>
    </>
  );
}
